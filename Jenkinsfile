pipeline {
    agent {
        docker { image 'cypress/included:6.3.0' }
    }

    environment  {
        HOME = '.'
        CYPRESS_CACHE_FOLDER = '/root/.cache/Cypress'
        DISPLAY = ':99'
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
                sh 'npm -v'
                // sh 'npx cypress run'
                sh 'npx cypress run --headless -b chrome  --record -k 03b6e3df-6cb4-4c90-8c7a-f882fe169007'
            }
        }

        stage('Post'){
            sh 'pkill Xvfb'
            sh 'pkill -f http-server'
        }
    }
}