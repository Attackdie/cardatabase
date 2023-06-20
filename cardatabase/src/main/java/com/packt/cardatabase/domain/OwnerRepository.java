package com.packt.cardatabase.domain;
//테이블간의 관계 
import  org.springframework.data.repository.CrudRepository;

public interface OwnerRepository extends CrudRepository<Owner, Long> {
	
	
	
}
