FROM centos:latest

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

EXPOSE 4200
CMD ["ng","serve", "--host", "0.0.0.0", "--disable-host-check"] 