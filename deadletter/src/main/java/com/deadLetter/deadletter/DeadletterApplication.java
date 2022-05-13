package com.deadLetter.deadletter;

import com.deadLetter.deadletter.config.AppKafkaProperties;
import com.deadLetter.deadletter.config.KafkaConfiguration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.UUID;

@SpringBootApplication
@EnableConfigurationProperties(AppKafkaProperties.class)
public class DeadletterApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeadletterApplication.class, args);
	}

}


@Component
class OrderListener {

	private static final Logger log = LoggerFactory.getLogger(OrderListener.class);

	@KafkaListener(topics = KafkaConfiguration.ORDERS)
	void listen(@Payload @Validated Order order) {
		log.info("Received: {}", order);
	}

}

record Order(
		@NotNull UUID orderId,
		@NotNull UUID articleId,
		@Positive int amount) {
}
