# Lista de serviços
services=("api-gateway" "auth-service" "address-service" "register-service" "notification-service" "order-service")

# Loop através de cada serviço
for service in ${services[@]}
do
  # Navega até a pasta do serviço
  cd $service

  # Instala as dependências
  npm install

  # Volta para a pasta raiz
  cd ..
done