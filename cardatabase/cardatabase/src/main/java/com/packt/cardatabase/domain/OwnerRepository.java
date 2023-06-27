package com.packt.cardatabase.domain;
//테이블간의 관계 
import  org.springframework.data.repository.CrudRepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


public interface OwnerRepository extends CrudRepository<Owner, Long> {

	Optional<Owner> findByFirstname(String firstName);
	
	
}
