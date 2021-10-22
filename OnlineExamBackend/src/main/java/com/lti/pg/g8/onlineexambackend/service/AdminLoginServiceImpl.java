package com.lti.pg.g8.onlineexambackend.service;

import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Admin;

@Service
public class AdminLoginServiceImpl implements AdminLoginService {

	@Override
	public boolean validateAdmin(Admin admin) {

		if (admin.emailId.equals("Admin") && admin.password.equals("Admin@123")) {
			return true;
		}
		return false;
	}

}
