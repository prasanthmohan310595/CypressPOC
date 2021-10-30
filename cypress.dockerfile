FROM cypress/browsers:node14.10.1-edge88

RUN apt-get update
RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils

# install Chrome browser
ENV CHROME_VERSION 91.0.4472.114
RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}-1_amd64.deb" && \
  dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
  apt-get install -f -y && \
  rm -f /usr/src/google-chrome-stable_current_amd64.deb
RUN google-chrome --version

WORKDIR /cypress

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .
COPY cypress.json .
COPY ./cypress ./cypress


# by setting CI environment variable we switch the Cypress install messages
ENV CI=1
RUN npm ci


#cypress entry point
ENTRYPOINT ["npx", "cypress"]