# Jenkins
It is has Jenkins Pipeline and Readme File and other discussion about Jenkins

## What is Jenkins ?
- Jenkin is an open source automation server.
- It has building, testing and deploy phase and these all are automated phase.
- It is used for **Continous Integration** and **Continous Delivery**.
- It has web interface and has easy configuration.
- It has **plugins** and can distribute work across multiple machines.
- Continous Integration - Build, Test and Merge
- Continous Delivery - Automatically release to repository
- Continous Deployment - Automatically Deploy Live to Production

## Installation on Windows
- Install WSL2 for windows in ubuntu
- Follow this commands for ubuntu [https://www.jenkins.io/doc/book/installing/linux/#debianubuntu]

## Start Jenkins
- Check Status - sudo systemctl status jenkins
- Start - sudo systemctl enable jenkins
- By default port : 8080
- Jenkins running - [http://localhost:8080/]
- get the key from path and unlock jenkin - sudo cat /var/lib/jenkins/secrets/initialAdminPassword
- Install required plugins and create admin login

## Create Job
- create job from jenkins UI 
- 

### Jenkins config file
-  sudo systemctl --full edit jenkins.service

### Start/Stop Jenkin
- sudo systemctl stop jenkins
- sudo systemctl start jenkins
- sudo systemctl status jenkins

## Jenkins job
- simple shell commands
- cron job
- github integration




