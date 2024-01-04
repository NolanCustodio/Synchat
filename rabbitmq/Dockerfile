FROM rabbitmq:3.12-management

ENV RABBIT_USER=${RABBBIT_USER}
ENV RABBIT_PASSWORD=${RABBIT_PASSWORD}

COPY init.sh /init.sh
RUN chmod +x /init.sh

CMD ["/init.sh"]
# RUN /init.sh