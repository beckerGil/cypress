pipeline {
    agent {
        docker { image 'cypress/included:6.3.0' }
    }

    environment  {
        HOME = '.'
        CYPRESS_CACHE_FOLDER = '/root/.cache/Cypress'
    }

    stages {
        stage('Build') {
            steps {
                sh 'Xvfb :99 &'
                // echo "sh 'cypress run -h'"
                // sh 'cypress run -h'
                // sh 'npm ci'
            }
        }

        stage('Test'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
}