echo "Aguardando o MySQL iniciar..."

while ! nc -z db 3306; do
  sleep 1
done

echo "MySQL está pronto. Iniciando a aplicação..."
exec "$@"