package com.packt.cardatabase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.packt.cardatabase.domain.Car;
import com.packt.cardatabase.domain.CarRepository;

//2023 06 19 CommandLineRunner h2 데이터베이스 입출력 추가
@SpringBootApplication
public class CardatabaseApplication implements CommandLineRunner{
	private static final Logger logger =
			LoggerFactory.getLogger(CardatabaseApplication.class);
	
	//2023 06 19 의존성 주입
	@Autowired
	private CarRepository repository;

	public static void main(String[] args) {
		//2023 06 18 로깅 테스트
		//이 주석을 추가하면 애플리케이션 재시작됨
		SpringApplication.run(CardatabaseApplication.class, args);
		logger.info("Application started");
	}
	
	
	//2023 06 19 
	@Override
	public void run(String... args) throws Exception {
		
		// 이곳에 코드를 추가
		repository.save(new Car("Ford", "Mustang", "Red", "ADF-1121", 2021, 59000, null));
		repository.save(new Car("Nissan", "Leaf", "white", "SSJ-3002", 2019, 29000, null));
		repository.save(new Car("Toyota", "Prius", "Silver", "KKO-0212", 2020, 39000, null));
		
		//2023 06 19
		//모든 자동차를 가져와 콘솔에 로깅
		for (Car car : repository.findAll()) {
			logger.info(car.getBrand() + " " + car.getModel());
			
		}
	}

}
