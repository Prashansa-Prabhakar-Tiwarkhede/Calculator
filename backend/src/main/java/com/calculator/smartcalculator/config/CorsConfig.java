package com.calculator.smartcalculator.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.*;

@Configuration
public class CorsConfig {

    // Comma-separated list of allowed origins.
    // Defaults to the local Vite dev server; override in application.properties
    // or via the CORS_ALLOWED_ORIGINS env var when deploying (e.g. your
    // deployed frontend URL).
    @Value("${cors.allowed-origins:http://localhost:5173}")
    private String allowedOrigins;

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        for (String origin : allowedOrigins.split(",")) {
            configuration.addAllowedOrigin(origin.trim());
        }

        configuration.addAllowedMethod("*");

        configuration.addAllowedHeader("*");

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

}