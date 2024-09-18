#!/bin/bash
# Script para esperar o banco de dados estar pronto
echo "Aguardando o MySQL iniciar..."

while ! nc -z db 3306; do
  sleep 1
done

echo "MySQL está pronto. Iniciando a aplicação..."
exec "$@"