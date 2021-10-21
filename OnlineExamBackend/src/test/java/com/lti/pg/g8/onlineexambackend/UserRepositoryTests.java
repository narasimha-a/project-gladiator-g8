package com.lti.pg.g8.onlineexambackend;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.repository.UserRepository;
 
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)

public class UserRepositoryTests {
	
	@Autowired
    private TestEntityManager entityManager;
     
    @Autowired
    private UserRepository repo;
    
    @Test
    public void testCreateUser() {
//        User user = new User();
//        user.setUserName("Ravi");
//        user.setUserEmail("ravikumar@gmail.com");
//        user.setUserMobile("9663880744");
//        user.setDateOfBirth("1986-05-19");
//        user.setQualification("BE");
//        user.setYearOfGraduation("2021");
//        user.setPassword("ravi2020");
//        user.setAddress("Bangalore","Karnataka");
//       
//         
//        User savedUser = repo.save(user);
//         
//        User existUser = entityManager.find(User.class, savedUser.getUserId());
//         
//        assertThat(user.getUserEmail()).isEqualTo(existUser.getUserEmail());
//         
    }

}
