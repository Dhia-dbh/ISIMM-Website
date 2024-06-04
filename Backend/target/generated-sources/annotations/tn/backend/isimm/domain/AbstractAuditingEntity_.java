package tn.backend.isimm.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.MappedSuperclassType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.time.Instant;

@StaticMetamodel(AbstractAuditingEntity.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class AbstractAuditingEntity_ {

	
	/**
	 * @see tn.backend.isimm.domain.AbstractAuditingEntity#createdDate
	 **/
	public static volatile SingularAttribute<AbstractAuditingEntity, Instant> createdDate;
	
	/**
	 * @see tn.backend.isimm.domain.AbstractAuditingEntity#createdBy
	 **/
	public static volatile SingularAttribute<AbstractAuditingEntity, String> createdBy;
	
	/**
	 * @see tn.backend.isimm.domain.AbstractAuditingEntity#lastModifiedDate
	 **/
	public static volatile SingularAttribute<AbstractAuditingEntity, Instant> lastModifiedDate;
	
	/**
	 * @see tn.backend.isimm.domain.AbstractAuditingEntity#lastModifiedBy
	 **/
	public static volatile SingularAttribute<AbstractAuditingEntity, String> lastModifiedBy;
	
	/**
	 * @see tn.backend.isimm.domain.AbstractAuditingEntity
	 **/
	public static volatile MappedSuperclassType<AbstractAuditingEntity> class_;

	public static final String CREATED_DATE = "createdDate";
	public static final String CREATED_BY = "createdBy";
	public static final String LAST_MODIFIED_DATE = "lastModifiedDate";
	public static final String LAST_MODIFIED_BY = "lastModifiedBy";

}

