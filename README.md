# jacob.uk.com
### My personal website

[jacob.uk.com](jacob.uk.com) is a Java 8 Dropwizard application, it is built with Maven in order to produce an über jar which can be deployed. 

It is also possible to run up this app with Docker - which will mount the code, built it through Maven and run the jar.

Travis-CI is enabled for this project which builds a new Docker image on every successful build and pushes the artefact to the Dockerhub.

#### Building

##### Source
```shell
$ mvn clean install
$ java -jar target/website.jar server config.yml
```

##### Build a new Docker image from source
```shell
$ docker build -t imjacobclark/jacob.uk.com .
$ docker run -d -p 8080:8080 imjacobclark/jacob.uk.com
```

##### Running the latest pre-built Docker image
```shell
$ docker run -d -p 8080:8080 imjacobclark/jacob.uk.com
```
