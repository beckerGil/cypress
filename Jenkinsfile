pipeline {
    agent {
        docker { image 'cypress/included:6.3.0' }
    }

    environment  {
        HOME = '.'
    }

    stages {
        stage('Build') {
            steps {
                echo "'node --version'"
                sh 'node --version'
                echo "sh 'cypress run -h'"
                sh 'cypress run -h'
                sh 'npm ci'
                sh 'npm run node_module\\.bin\\cy:verify'
            }
        }

        stage('Test'){
            steps{
                sh 'npm run ci:cy-run'
            }
        }
    }
}