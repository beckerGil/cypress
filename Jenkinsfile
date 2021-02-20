pipeline {
    agent {
        docker { image 'cypress/base:14' }
        // docker { image 'cypress/included:6.3.0' }
    }

    environment  {
        HOME = '.'
        CYPRESS_CACHE_FOLDER = '/var/lib/jenkins/workspace/cypress_master/node_modules/cypress/.cache/Cypress'
        DISPLAY = ':99'
    }

    stages {
        stage('Build') {
            steps {
                sh 'Xvfb :99 &'
                // echo "sh 'cypress run -h'"
                // sh 'cypress run -h'
                // sh 'npm install'
                // sh 'npx cypress install'
                sh 'npm ci'
                // sh 'npm run cy:verify'
            }
        }

        stage('start local server'){
            steps{
                sh 'nohup npm run start:ci &'
            }
        }

        stage('Test'){
            steps{
                sh 'npm -v'
                sh 'npx cypress cache path'
                sh 'npx cypress cache list'
                // sh "npm run e2e:record:chrome"
                // sh 'npm run cy:run --headless -b chrome --record -k 03b6e3df-6cb4-4c90-8c7a-f882fe169007 -s "cypress/test/login.js"'
                sh 'DEBUG=cypress:* npx cypress run --headless -b chrome  --record -k 03b6e3df-6cb4-4c90-8c7a-f882fe169007'
            }
        }

        stage('Post'){
            steps{
                sh 'pkill Xvfb'
                sh 'pkill -f http-server'
            }
        }
    }
}