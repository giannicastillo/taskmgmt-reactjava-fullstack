package com.castillo.checklistfullstack.restfulwebservices.basic.auth;

//import org.springframework.context.annotation.Bean;


import org.springframework.context.annotation.Configuration;

import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;




@Configuration
@EnableWebSecurity
public class SpringSecConfigBasicAuth extends WebSecurityConfigurerAdapter{
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.inMemoryAuthentication().withUser("Gianni").password(passwordEncoder().encode("123")).authorities("user", "admin");
//	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
//		http.authorizeHttpRequests().anyRequest().authenticated();
//		
//		http.formLogin();
		
		http
			//diabled csrf
			.csrf().disable().cors().and()
			//except for authorization request to all URLs 
			.authorizeHttpRequests()
			//for anything matching "/**", anything that comes to a URL permit all 
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
			//authenticate all the other request 
				.anyRequest().authenticated()
				.and()
//				.formLogin().and()
//				use http basic authorization 
				.httpBasic();
	}
		

}


