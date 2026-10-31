FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /usr/share/nginx/html/IntroSectionWithDropdownNavigation
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/client /usr/share/nginx/html/IntroSectionWithDropdownNavigation/
# React Router writes the prerendered page under the basename directory and leaves
# an empty SPA shell at index.html. Nginx serves the shell, so promote the prerender.
RUN if [ -f /usr/share/nginx/html/IntroSectionWithDropdownNavigation/IntroSectionWithDropdownNavigation/index.html ]; then \
      cp /usr/share/nginx/html/IntroSectionWithDropdownNavigation/IntroSectionWithDropdownNavigation/index.html \
         /usr/share/nginx/html/IntroSectionWithDropdownNavigation/index.html; \
      rm -rf /usr/share/nginx/html/IntroSectionWithDropdownNavigation/IntroSectionWithDropdownNavigation; \
    fi

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
