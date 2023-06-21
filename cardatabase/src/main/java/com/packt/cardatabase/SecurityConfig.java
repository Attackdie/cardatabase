package com.packt.cardatabase;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//2023 06 21 스프링 시큐리티 구성되는 클래스 생성
//보호가 되는 앤드포인트
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	//2023 06 21
	//보호되지 않는 앤드포인트 메서드
	@Override
	protected void configure(HttpSecurity http) throws Exception {
	}	
}
