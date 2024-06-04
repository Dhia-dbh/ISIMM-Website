package tn.backend.isimm.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(Student.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class Student_ {

	
	/**
	 * @see tn.backend.isimm.domain.Student#lastName
	 **/
	public static volatile SingularAttribute<Student, String> lastName;
	
	/**
	 * @see tn.backend.isimm.domain.Student#firstName
	 **/
	public static volatile SingularAttribute<Student, String> firstName;
	
	/**
	 * @see tn.backend.isimm.domain.Student#classId
	 **/
	public static volatile SingularAttribute<Student, String> classId;
	
	/**
	 * @see tn.backend.isimm.domain.Student#cin
	 **/
	public static volatile SingularAttribute<Student, String> cin;
	
	/**
	 * @see tn.backend.isimm.domain.Student#id
	 **/
	public static volatile SingularAttribute<Student, Long> id;
	
	/**
	 * @see tn.backend.isimm.domain.Student
	 **/
	public static volatile EntityType<Student> class_;
	
	/**
	 * @see tn.backend.isimm.domain.Student#numCarteEtud
	 **/
	public static volatile SingularAttribute<Student, String> numCarteEtud;
	
	/**
	 * @see tn.backend.isimm.domain.Student#email
	 **/
	public static volatile SingularAttribute<Student, String> email;

	public static final String LAST_NAME = "lastName";
	public static final String FIRST_NAME = "firstName";
	public static final String CLASS_ID = "classId";
	public static final String CIN = "cin";
	public static final String ID = "id";
	public static final String NUM_CARTE_ETUD = "numCarteEtud";
	public static final String EMAIL = "email";

}

