pipeline {
    agent any 
    stages {
        stage('Checkout'){
            steps {
                echo "Pull from bitbucket..."
                git credentialsId: 'mohara-bitbucket', url: 'bitbucket.org:bit_mohara/expt-poc-jenkins.git', branch: 'development'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sshPublisher(publishers: [
                sshPublisherDesc(configName: 'exp-api-dev', transfers:
                [sshTransfer(execCommand: ''' 
                cd /home/ubuntu/microservices/expt-campaign &&
                git checkout develop &&
                git pull &&
                sudo docker-compose -f docker-compose.dev-server.yml up -d --build
                ''')], verbose: true)
                ])
            }
        }
    }   
}

