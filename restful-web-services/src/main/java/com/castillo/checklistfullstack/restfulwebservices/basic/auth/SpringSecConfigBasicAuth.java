package com.castillo.checklistfullstack.restfulwebservices.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
//import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;



@Configuration
@EnableWebSecurity
//below is more of a convetion and is not really needed 
public class SpringSecConfigBasicAuth extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		

		//http.formLogin();http.httpBasic();//		http.authorizeRequests((requests) -> requests.anyRequest().authenticated());
		
		http
		//disbaled csr
		.csrf().disable()
		
		.authorizeRequests()
		//except for options request to urls
		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll();
		//authenticate all other request 
				anyRequest().authenticated()
				.and()
			//use Http Basic Authentication 
				.httpBasic();
			
	}

	private ExpressionUrlAuthorizationConfigurer<HttpSecurity>.AuthorizedUrl anyRequest() {
		// TODO Auto-generated method stub
		return null;
	}



}
