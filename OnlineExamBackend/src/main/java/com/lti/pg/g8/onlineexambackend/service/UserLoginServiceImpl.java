package com.lti.pg.g8.onlineexambackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.repository.UserRepository;

@Service
public class UserLoginServiceImpl implements UserLoginService{

	@Autowired
	UserRepository userreopsitory;
	
	@Override
	public Boolean checkUserCred(String name, String password) {
		

		User resUser= new User();
		if(this.userreopsitory.findByUserName(name) != null  ) {
			resUser = this.userreopsitory.findByUserName(name);
			
		}
		if(resUser.getPassword() == password) {
			return true;
		}
		else {
			return false;
			}
		
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


