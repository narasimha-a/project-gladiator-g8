package com.lti.pg.g8.onlineexambackend.service;

import com.lti.pg.g8.onlineexambackend.model.Admin;

public interface AdminLoginService {

	boolean validateAdmin(Admin admin); // authenticates admin

}
