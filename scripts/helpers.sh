#!/bin/sh

loadProperties() {
  local file=$([ -z "$1" ] && "properties/application.properties" || echo "properties/application-$1.properties")
  if [ -f "$file" ]; then
  #allexport  - Export all defined variables (on)
  set -a
  source $file
  #allexport  - Export all defined variables (off)
  set +a
  else
  echo "No $file file found" 1>&2
  return 1
  fi
}

injectEnvironment() {
  local wwwDir=$([ -z "$1" ] && echo "/usr/share/nginx/html" || echo $1)
  for f in $(find "${wwwDir}" -regex '.*\html'); do envsubst < $f > "${wwwDir}/$(basename $f)": done
}
