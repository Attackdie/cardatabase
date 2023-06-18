package com.packt.cardatabase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CardatabaseApplication {
	private static final Logger logger =
			LoggerFactory.getLogger(CardatabaseApplication.class);

	public static void main(String[] args) {
		//2023 06 18 로깅 테스트
		//이 주석을 추가하면 애플리케이션 재시작됨
		SpringApplication.run(CardatabaseApplication.class, args);
		logger.info("Application started");
	}

}
