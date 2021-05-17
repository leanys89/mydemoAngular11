package com.gazgeek.helloworld.controller;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import com.gazgeek.helloworld.dto.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController

public class UserController {

	@PostMapping("login")
	// @CrossOrigin
	public ApiResponse login(@RequestParam("username") String username, @RequestParam("pwd") String pwd) {
		ApiResponse resp = new ApiResponse();
		if (username.equals("acl") && pwd.equals("zaq11qaz")) {
			String token = getJWTToken(username);
			User user = new User();
			user.setUsername(username);
			user.setToken(token);

			resp.setMessage("ok");
			resp.setData(user);
			resp.setStatus(200);
			return resp;
		} else {
			resp.setMessage("Invalid username or password");
			;
			resp.setStatus(403);
			resp.setData(null);
			return resp;
		}

	}

	private String getJWTToken(String username) {
		String secretKey = "jydhgdmhfgdsdfasncgfsxmbvxjflhjce65ey74tjd52y54egckyteurejydhgdmhfgdsdfasncgfsxmbvxjflhjce65ey74tjd52y54egckyteure";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_USER");

		String token = Jwts.builder().setId("softtekJWT").setSubject(username)
				.claim("authorities",
						grantedAuthorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512, secretKey.getBytes()).compact();

		return token;
	}
}