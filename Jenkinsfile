#! /usr/bin/env groovy

pipeline {

  agent {
    docker {
      image 'node:12-stretch'
    }
  }

  options {
    timeout(time: 60, unit: 'MINUTES')
    disableConcurrentBuilds()
  }

  environment {
    MSG = 'hello world'
  }

  stages {
    stage ('Build') {
      steps {
        sh 'yarn install --frozen-lockfile --silent'
      }
    }
  }
}
