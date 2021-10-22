package com.lti.pg.g8.onlineexambackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SearchStudents {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    Long searchId;

    String userName;

    String userEmail;

    String userMobile;

    String city;

    String state;

    String examName;

    String percentages;

    @Override
    public String toString() {
        return "SearchStudents [searchId=" + searchId + ", userName=" + userName + ", userEmail=" + userEmail
                + ", userMobile=" + userMobile + ", city=" + city + ", state=" + state + ", examName=" + examName
                + ", percentages=" + percentages + "]";
    }



}