package com.deadLetter.deadletter.config;

import org.springframework.lang.Nullable;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.Duration;

public record AppKafkaProperties(
        @NotNull @Valid DeadLetter deadletter,
        @NotNull @Valid Backoff backoff) {
}

record DeadLetter(
        @NotNull Duration retention,
        @Nullable String suffix) {
}

record Backoff(
        @NotNull Duration initialInterval,
        @NotNull Duration maxInterval,
        @Positive int maxRetries,
        @Positive double multiplier) {
}
