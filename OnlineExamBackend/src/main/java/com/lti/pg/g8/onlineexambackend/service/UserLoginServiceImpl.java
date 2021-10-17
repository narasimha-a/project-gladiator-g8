package com.lti.pg.g8.onlineexambackend.service;

import javax.persistence.NoResultException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.repository.UserRepository;

@Service
public class UserLoginServiceImpl implements UserLoginService{

	
	final UserRepository userreopsitory;
	
	
	
	public UserLoginServiceImpl(UserRepository userreopsitory) {
		this.userreopsitory = userreopsitory;
	}



	@Override
	public Boolean checkUserCred(String name, String password) {
		

		User resUser;
		try {
			resUser = this.userreopsitory.findByUserName(name, password);
			if(resUser == null) {
				return false;
			}
		}catch(NoResultException nre) {
			return false;
		}
		return true;
//		if(this.userreopsitory.findByUserName(name,password) != null  ) {
//			resUser = this.userreopsitory.findByUserName(name);
//			
//		}
//		if(resUser.getPassword() == password) {
//			return true;
//		}
//		else {
//			return false;
//			}
		
//		if(resUser.getUserName() != null && resUser.getPassword().equals(password)) {
//			return true;
//		}
//		else {
//			return false;
//		}
		
		
		
	}

	
	
//	@PersistenceContext
//	private EntityManager entityManager;
//	
//	@Transactional
//	@Override
//	public Boolean checkUserCred(String name, String upassword) {
//		
//		String tempName="";
//		String tempPassword="";
//		String sqlqry= "Select u.userName, u.password from User u where u.userName=:uname and u.password=:upass";
//		Query query = entityManager.createQuery(sqlqry,User.class);
//		query.setParameter("uname",name);
//		query.setParameter("upass", upassword);
//		
//
//		@SuppressWarnings("unchecked")
//		List<Object[]> loginStatus = query.getResultList();
//		for(Object[] loginstatus:loginStatus) {
//			tempName= (String) loginstatus[0];
//			tempPassword= (String) loginstatus[1];
//		}
//		
//		if(tempName!= null && tempPassword!=null)  {
//			return true;
//		}
//		else {
//			return false;
//		}
//		
//
//	}

}


