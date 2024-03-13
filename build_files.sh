source venv/bin/activate


set -e

pip install -r requirements.txt
if [[ $? -ne 0 ]]; then
    exit 1
fi

python manage.py collectstatic
if [[ $? -ne 0 ]]; then
    exit 1
fi

# Other commands in your script
