# jacobclark.xyz
### My personal website

[![Build Status](https://travis-ci.org/imjacobclark/jacobclark.xyz.svg)](https://travis-ci.org/imjacobclark/jacobclark.xyz)

[jacobclark.xyz](https://www.jacobclark.xyz) is a Java 8 Dropwizard application, it is built into an über jar with Maven.

Travis-CI is enabled for this project which builds a new Docker image on every successful build and pushes the artefact to the Dockerhub. In production the Docker image is baked onto a machine image with Packer and deployed onto a Digital Ocean droplet. 

[jacobclark.xyz](https://www.jacobclark.xyz) sports a responsive mobile friendly webpage for desktops and tablets, it also supports AMP for mobile devices. It is progressively enhanced through semantic HTML5 and as a result accessible to screen readers and text based web browsers.


#### Building

##### Source
```shell
$ mvn clean install
$ java -jar target/website.jar server config.yml
```

##### Build a new Docker image from source
```shell
$ docker build -t imjacobclark/jacobclark.xyz .
$ docker run -d -p 8080:8080 imjacobclark/jacobclark.xyz
```

##### Running the latest pre-built Docker image
```shell
$ docker run -d -p 8080:8080 imjacobclark/jacobclark.xyz
```
