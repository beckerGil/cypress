pipeline {
    agent {
        docker { image 'cypress/included:6.3.0' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}