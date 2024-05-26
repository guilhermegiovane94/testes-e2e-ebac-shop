pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
               git branch: 'main', url: 'https://github.com/guilhermegiovane94/testes-e2e-ebac-shop.git'
               sh  'npm install'
            }
        }
        stage('Test') {
            steps {
              sh 'NO_COLOR=1 npm testEtoE'
            }
        }
    }
}
