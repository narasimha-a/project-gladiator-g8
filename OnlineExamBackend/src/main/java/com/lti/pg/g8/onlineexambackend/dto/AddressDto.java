package com.lti.pg.g8.onlineexambackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AddressDto {
	private Long id;
	private String city;
	private String state;
}
