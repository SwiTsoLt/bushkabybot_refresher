#!/bin/sh
set -euo pipefail
python main.py migrate
exec python main.py runserver 0.0.0.0:8000