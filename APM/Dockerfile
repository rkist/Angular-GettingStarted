# Production
# docker build -t my-angular-project:prod .

# Development
# docker build -t my-angular-project:dev --build-arg env=dev .

#centos7
FROM centos:latest AS node-build

RUN yum -y update
RUN yum install -y epel-release
RUN yum -y update

RUN yum install -y nodejs --enablerepo=epel

RUN npm install npm

RUN npm install @angular/cli
RUN npm link @angular/cli

WORKDIR /opt/app

COPY . /opt/app

RUN npm install 

ARG env=prod
# ARG env=dev

RUN npm run build -- --prod --environment $env

#1.13.10
FROM nginx:alpine

COPY --from=node-build /opt/app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf




