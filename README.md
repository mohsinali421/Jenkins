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
- open ubuntu terminal
- Check Status - sudo systemctl status jenkins
- Start - sudo systemctl enable jenkins
- By default port : 8080
- Jenkins running - [http://localhost:8080/]
- username:password - mohsin
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
- poll github on branch recurring for only changes
- email notification on job failure
- remote server actions job - transfer file to ec2 (pending)
- update server code (pending)

### Email Setup
- Manage Jenkins -> System -> Email Notification
- SMTP Server = smtp.gmail.com
- Advance -> Use SMTP Authentication - Enter Google App Password and user name as gmail
- Google Account Setting -> App Password
- Port = 465
- Email Suffix = @testjenkins.com
- Use SSL
- Test Email and Save

### User Management in Jenkins
- Manage Jenkins -> Users -> Create User
- Install Plugins - ***Role Based Authorization Strategy***
- Change Role and Access for user
- Manage Jenkins -> Security -> Role Based Strategy
- Create New Role => Manage Jenkins -> Manage and Assign Roles -> Create new role
- Assign Roles => Manage Jenkins -> Manage and Assign Roles -> Assign Role -> Add User

### Environment Variables
- Inbuilt Environment Variables [https://wiki.jenkins.io/display/JENKINS/Building+a+software+project#Buildingasoftwareproject-belowJenkinsSetEnvironmentVariables]
- Custom Global Environment Variables - Manage Jenkins -> System -> Global Properties -> Add Environment Variable

### Artifacts
- Artifacts are the files after build is generated.
- Post build -> Archive Artificats

## Jenkins Pipeline
- Official Docs [https://www.jenkins.io/doc/book/pipeline/]
- Create job using pipeline.
- Environment - environment {}
- Credentials - Manage jenkins -> Credentials -> Store Scoped to jenkins -> System -> Global credentials -> Add credentials -> Secret text
- To use credentials - SECRET=credentials('PASS')

```
Pipeline Syntax Generator [http://localhost:8080/pipeline-syntax/]
```

### Other things to explore
- **Ansible** - Manage multiple servers from single machine like software installation, updates, etc.
- **Maven** - Build automation tool primarily for java projects.

### Video Tutorial
- Follow this youtube video - [https://www.youtube.com/watch?v=NVaP8qtLm6Q&t=11574s]


