package tn.backend.isimm.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(Teacher.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class Teacher_ {

	
	/**
	 * @see tn.backend.isimm.domain.Teacher#lastName
	 **/
	public static volatile SingularAttribute<Teacher, String> lastName;
	
	/**
	 * @see tn.backend.isimm.domain.Teacher#firstName
	 **/
	public static volatile SingularAttribute<Teacher, String> firstName;
	
	/**
	 * @see tn.backend.isimm.domain.Teacher#numTeacher
	 **/
	public static volatile SingularAttribute<Teacher, String> numTeacher;
	
	/**
	 * @see tn.backend.isimm.domain.Teacher#cin
	 **/
	public static volatile SingularAttribute<Teacher, String> cin;
	
	/**
	 * @see tn.backend.isimm.domain.Teacher#id
	 **/
	public static volatile SingularAttribute<Teacher, Long> id;
	
	/**
	 * @see tn.backend.isimm.domain.Teacher
	 **/
	public static volatile EntityType<Teacher> class_;
	
	/**
	 * @see tn.backend.isimm.domain.Teacher#email
	 **/
	public static volatile SingularAttribute<Teacher, String> email;

	public static final String LAST_NAME = "lastName";
	public static final String FIRST_NAME = "firstName";
	public static final String NUM_TEACHER = "numTeacher";
	public static final String CIN = "cin";
	public static final String ID = "id";
	public static final String EMAIL = "email";

}

