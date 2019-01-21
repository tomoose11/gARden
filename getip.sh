#!/usr/bin/env bash
echo "Harpal thinks your ip address is "
ip route get 8.8.8.8|cut -d ' ' -f7
