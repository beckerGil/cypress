pipeline {
    agent {
        docker { image 'cypress/included:6.3.0' }
    }
    stages {
        stage('Test') {
            steps {
                echo "'node --version'"
                sh 'node --version'
                echo "sh 'cypress run -h'"
                sh 'cypress run -h'
                sh 'cypress run'
            }
        }
    }
}