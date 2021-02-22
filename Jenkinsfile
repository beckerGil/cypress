pipeline {
    agent {
        // docker { image 'cypress/base:14' }
        docker { image 'cypress/included:6.3.0' }
    }

    environment  {
        HOME = '/var/lib/jenkins/workspace/cypress_master'
        CYPRESS_CACHE_FOLDER = '/var/lib/jenkins/workspace/cypress_master@tmp/cache'
        DISPLAY = ':99'
        CYPRESS_RECORD_KEY = '03b6e3df-6cb4-4c90-8c7a-f882fe169007'
    }

    stages {
        stage('Build') {
            steps {
                sh 'Xvfb :99 &'
                // sh 'Xvfb -screen 0 1024x768x24 :99 &'
            }
        }

        stage('start local server'){
            steps{
                sh 'nohup npm run start:ci &'
            }
        }

        stage('Test'){
            steps{
                sh 'NO_COLOR=1 DEBUG=cypress:cli cypress run --headless -b chrome  --record -k CYPRESS_RECORD_KEY'
            }
        }        
    }
    
    post {
    // shutdown the server running in the background
    always {
      echo 'Stopping local server'
      sh 'pkill Xvfb'
    }
  }
}