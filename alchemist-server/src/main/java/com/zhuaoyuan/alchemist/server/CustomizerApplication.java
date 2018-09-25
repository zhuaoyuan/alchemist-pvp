package com.zhuaoyuan.alchemist.server;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;

@SpringBootApplication(scanBasePackages = "com.zhuaoyuan.alchemist.server")
public class CustomizerApplication implements EmbeddedServletContainerCustomizer {

    @Value("12345")
    private Integer port;

    public static void main(String[] args) {
        SpringApplication.run(CustomizerApplication.class,args);
    }

    @Override
    public void customize(ConfigurableEmbeddedServletContainer container) {
        container.setPort(port);
    }


}
