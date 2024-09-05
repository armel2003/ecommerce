pipeline {
    agent any  // Indique que ce pipeline peut être exécuté sur n'importe quel agent disponible

    stages {
        // Étape 1 : Cloner le dépôt
        stage('Clone') {
            steps {
                // Utilise Git pour cloner la branche 'master' du dépôt GitHub spécifié
                git branch: 'master', url: 'https://github.com/armel2003/ecommerce.git'
            }
        }

        // Étape 2 : Construction du projet
        stage('Build') {
            steps {
                // Utilise une commande shell (sh) pour installer les dépendances avec npm et construire le projet
		        sh '''
                    npm install  // Installe les dépendances listées dans le fichier package.json
                    npm run build  // Exécute le script de construction défini dans le package.json
                '''
            }
        }

        // Étape 3 : Contrôle de la qualité avec SonarQube
        stage('Contrôle qualité') {
            steps {
                // Utilise SonarQube pour analyser le code source et générer un rapport de qualité
                sh '''
                # sonar-scanner est l'outil utilisé pour envoyer les analyses de code à SonarQube
                # $sonarqube_project et $sonarqube_token doivent être configurés dans les variables d'environnement Jenkins

                sonar-scanner \
                  -Dsonar.projectKey=$sonarqube_project \
                  -Dsonar.sources=. \
                  -Dsonar.host.url=http://sonarqube:9000 \
                  -Dsonar.token=$sonarqube_token
                '''
            }
        }
    }
}

