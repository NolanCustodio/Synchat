FROM mongo:7.0

# EXPOSE 27017

COPY ./mongodb/generate-keyfile.sh /

ENTRYPOINT [ "/generate-keyfile.sh" ]
