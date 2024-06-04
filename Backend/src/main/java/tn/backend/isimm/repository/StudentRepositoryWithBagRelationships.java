package tn.backend.isimm.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import tn.backend.isimm.domain.Student;

public interface StudentRepositoryWithBagRelationships {
    Optional<Student> fetchBagRelationships(Optional<Student> student);

    List<Student> fetchBagRelationships(List<Student> students);

    Page<Student> fetchBagRelationships(Page<Student> students);
}
