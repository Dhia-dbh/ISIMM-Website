package tn.backend.isimm.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SetAttribute;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.time.Instant;

@StaticMetamodel(User.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class User_ extends tn.backend.isimm.domain.AbstractAuditingEntity_ {

	
	/**
	 * @see tn.backend.isimm.domain.User#lastName
	 **/
	public static volatile SingularAttribute<User, String> lastName;
	
	/**
	 * @see tn.backend.isimm.domain.User#resetDate
	 **/
	public static volatile SingularAttribute<User, Instant> resetDate;
	
	/**
	 * @see tn.backend.isimm.domain.User#login
	 **/
	public static volatile SingularAttribute<User, String> login;
	
	/**
	 * @see tn.backend.isimm.domain.User#activationKey
	 **/
	public static volatile SingularAttribute<User, String> activationKey;
	
	/**
	 * @see tn.backend.isimm.domain.User#resetKey
	 **/
	public static volatile SingularAttribute<User, String> resetKey;
	
	/**
	 * @see tn.backend.isimm.domain.User#authorities
	 **/
	public static volatile SetAttribute<User, Authority> authorities;
	
	/**
	 * @see tn.backend.isimm.domain.User#firstName
	 **/
	public static volatile SingularAttribute<User, String> firstName;
	
	/**
	 * @see tn.backend.isimm.domain.User#password
	 **/
	public static volatile SingularAttribute<User, String> password;
	
	/**
	 * @see tn.backend.isimm.domain.User#langKey
	 **/
	public static volatile SingularAttribute<User, String> langKey;
	
	/**
	 * @see tn.backend.isimm.domain.User#imageUrl
	 **/
	public static volatile SingularAttribute<User, String> imageUrl;
	
	/**
	 * @see tn.backend.isimm.domain.User#id
	 **/
	public static volatile SingularAttribute<User, Long> id;
	
	/**
	 * @see tn.backend.isimm.domain.User
	 **/
	public static volatile EntityType<User> class_;
	
	/**
	 * @see tn.backend.isimm.domain.User#email
	 **/
	public static volatile SingularAttribute<User, String> email;
	
	/**
	 * @see tn.backend.isimm.domain.User#activated
	 **/
	public static volatile SingularAttribute<User, Boolean> activated;

	public static final String LAST_NAME = "lastName";
	public static final String RESET_DATE = "resetDate";
	public static final String LOGIN = "login";
	public static final String ACTIVATION_KEY = "activationKey";
	public static final String RESET_KEY = "resetKey";
	public static final String AUTHORITIES = "authorities";
	public static final String FIRST_NAME = "firstName";
	public static final String PASSWORD = "password";
	public static final String LANG_KEY = "langKey";
	public static final String IMAGE_URL = "imageUrl";
	public static final String ID = "id";
	public static final String EMAIL = "email";
	public static final String ACTIVATED = "activated";

}

